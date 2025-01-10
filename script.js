const tabs = document.querySelectorAll('.tab');
const fileInput = document.getElementById('file-input');
const chooseFilesBtn = document.getElementById('choose-files-btn');
const uploadArea = document.getElementById('upload-area');
const fileList = document.getElementById('file-list');
const mergeButton = document.getElementById('merge-button');
const error = document.getElementById('error');

let files = [];
let activeTab = 'pdf'; // Default tab
const allowedExtensions = {
    pdf: ['pdf'],
    doc: ['doc', 'docx'],
    txt: ['txt'],
    jpeg: ['jpg', 'jpeg'],
    png: ['png'],
    csv: ['csv']
};

// Handle tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        activeTab = tab.dataset.tab;
        filterFilesByTab();
    });
});

// Clicking "Choose File" triggers file input
chooseFilesBtn.addEventListener('click', () => fileInput.click());

// Drag-and-drop handlers
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

// File input change handler
fileInput.addEventListener('change', () => handleFiles(fileInput.files));

function handleFiles(selectedFiles) {
    const newFiles = Array.from(selectedFiles);
    newFiles.forEach((file) => {
        if (file.size > 100 * 1024 * 1024) {
            error.textContent = `File ${file.name} exceeds the maximum allowed size of 100 MB.`;
        } else if (
            allowedExtensions[activeTab].includes(file.name.split('.').pop().toLowerCase()) &&
            !files.some(f => f.name === file.name)
        ) {
            files.push(file);
        } else {
            error.textContent = `Unsupported or duplicate file: ${file.name}`;
        }
    });
    updateFileList();
}

function filterFilesByTab() {
    files = files.filter(file => {
        const extension = file.name.split('.').pop().toLowerCase();
        return allowedExtensions[activeTab].includes(extension);
    });
    updateFileList();
}

const extension = file.name.split('.').pop().toLowerCase();
if (
    allowedExtensions[activeTab].includes(extension) &&
    !files.some(f => f.name === file.name)
) {
    files.push(file);
} else {
    error.textContent = `Unsupported or duplicate file: ${file.name}`;
}

function updateFileList() {
    fileList.innerHTML = '';
    files.forEach((file, index) => {
        let fileSize;
        if (file.size < 1024 * 1024) {
            fileSize = `${(file.size / 1024).toFixed(2)} KB`; // Convert to KB
        } else {
            fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`; // Convert to MB
        }
        const li = document.createElement('li');
        li.innerHTML = `${file.name} (${fileSize})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFile(index));
        li.appendChild(removeButton);
        fileList.appendChild(li);
    });
    mergeButton.disabled = files.length < 2;
    error.textContent = '';
}

function removeFile(index) {
    files.splice(index, 1);
    updateFileList();
}

mergeButton.addEventListener('click', async () => {
    if (files.length < 2) {
        error.textContent = 'Please select at least 2 files.';
        return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    formData.append('file_type', activeTab); // Send active tab type (e.g., 'jpeg', 'png')

    try {
        const response = await fetch('http://localhost:5000/api/merge', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Merge failed.');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `merged_output.${activeTab === 'jpeg' || activeTab === 'png' ? 'pdf' : activeTab}`;
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (err) {
        error.textContent = `Error: ${err.message}`;
    }
});

const clearQueueButton = document.getElementById('clear-queue-button');
clearQueueButton.addEventListener('click', () => {
    files = [];
    updateFileList();
    error.textContent = '';
});

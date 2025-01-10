File Merger Project
Effortlessly merge multiple files of various formats into a single, organized output document. Whether you’re dealing with PDFs, Word documents, images, or plain text, this tool is built to handle it all seamlessly.

✨ Key Features
Multi-Format Support:
Merge PDFs, Word documents (.doc/.docx), plain text files (.txt), images (.jpg, .jpeg, .png), and CSV spreadsheets.
File Metadata Display:
Automatically displays file sizes for better clarity and control over uploads.
Drag-and-Drop Interface:
User-friendly upload area for quick and intuitive file selection.
Customizable Merging Options:
Merges files based on their type, ensuring compatibility and logical grouping.
Responsive Design:
Fully optimized for both desktop and mobile devices.
Secure and Privacy-Focused:
Processes files locally without storing any user data, ensuring maximum security.
💻 Technologies Used
Frontend
HTML5, CSS3, JavaScript (Vanilla): Designed with a responsive and interactive user interface.
Dynamic Styling: CSS animations and gradient effects for a modern, polished look.
Backend
Flask: Lightweight Python web framework to handle file processing and merging.
PyPDF2: Used for merging PDF files programmatically.
Pillow (PIL): Converts and processes image files into formats suitable for merging.
python-docx: For combining Word documents seamlessly.
CSV Processing: Merges tabular data efficiently into a unified file.
🚀 How It Works
Upload Files:

Drag and drop your files into the upload area or use the "Choose Files" button.
Supported formats: .pdf, .doc, .docx, .txt, .jpg, .jpeg, .png, .csv.
View File Metadata:

The app displays the file name and size (in KB/MB) for transparency and easy management.
Merge Files:

Click the "Merge Files" button, and the backend will process the files into a single output.
Download Output:

Once the merging is complete, download the output file instantly.
📂 Project Structure

file-merger/
├── app.py             # Backend Flask server
├── index.html         # Frontend structure
├── script.js          # Client-side logic and interactivity
├── styles.css         # Styling for the user interface
├── README.md          # Project documentation
└── settings.json      # Dev environment configuration
🔧 Installation and Setup
Clone the Repository:

git clone https://github.com/yourusername/file-merger.git
cd file-merger
Install Dependencies:

Ensure you have Python installed (version 3.7+ recommended).
Install the required Python libraries:
pip install flask PyPDF2 Pillow python-docx
Run the Application:


python app.py
Access the Frontend:

Open index.html in a browser or serve it with a live server extension.
📸 Screenshots
1. Upload Interface

2. Metadata Display

3. Merged Output

📜 Use Cases
Students: Combine multiple PDFs, Word files, or images into a single document for assignments or reports.
Professionals: Consolidate contracts, invoices, or datasets for easier distribution.
Personal Use: Create photo albums, combined notes, or organize your records effortlessly.
🔒 Security and Privacy
This application does not store user data. All file processing occurs locally, ensuring complete privacy and security.

🌟 Future Enhancements
Audio Merging In Progress:
Support for combining .mp3 and .wav files.
Cloud Integration:
Upload and merge files directly from Google Drive or Dropbox.

📜 License
This project is licensed under the MIT License, making it free to use and distribute.

🧑‍💻 Contributing
We welcome contributions! To get started:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
📫 Contact
For questions, suggestions, or feedback, feel free to reach out:

Email: manjot.dhaliwal03@gmail.com
GitHub: manjot-dhaliwal
LinkedIn: manjot-dhaliwal03

        document.addEventListener('DOMContentLoaded', function() {
            const donors = [];
            const rowsPerPage = 10;
            let currentPage = 1;

            // Sample data (100 rows)
            for (let i = 1; i <= 100; i++) {
                donors.push({
                    sl: i,
                    name: `Donor ${i}`,
                    division: `Division ${Math.ceil(i / 20)}`,
                    district: `District ${Math.ceil(i / 10)}`,
                    upazila: `Upazila ${i}`,
                    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'][Math.floor(Math.random() * 8)],
                    number: `017${100000000 + i}`,
                    lastDonation: `2024-08-${Math.ceil(Math.random() * 31)}`
                });
            }

            function renderTable(page) {
                const tableBody = document.querySelector('#donorTable tbody');
                tableBody.innerHTML = '';

                const start = (page - 1) * rowsPerPage;
                const end = Math.min(start + rowsPerPage, donors.length);
                for (let i = start; i < end; i++) {
                    const donor = donors[i];
                    const row = `<tr>
                        <td>${donor.sl}</td>
                        <td>${donor.name}</td>
                        <td>${donor.division}</td>
                        <td>${donor.district}</td>
                        <td>${donor.upazila}</td>
                        <td>${donor.bloodGroup}</td>
                        <td>${donor.number}</td>
                        <td>${donor.lastDonation}</td>
                    </tr>`;
                    tableBody.innerHTML += row;
                }
            }

            function exportToPDF() {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.autoTable({ html: '#donorTable' });
                doc.save('donors.pdf');
            }

            function exportToExcel() {
                const ws = XLSX.utils.table_to_sheet(document.querySelector('#donorTable'));
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Donors');
                XLSX.writeFile(wb, 'donors.xlsx');
            }

            document.querySelector('#prevPage').addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    renderTable(currentPage);
                }
            });

            document.querySelector('#nextPage').addEventListener('click', function() {
                if (currentPage * rowsPerPage < donors.length) {
                    currentPage++;
                    renderTable(currentPage);
                }
            });

            document.querySelector('#pdfExport').addEventListener('click', exportToPDF);
            document.querySelector('#excelExport').addEventListener('click', exportToExcel);

            renderTable(currentPage);
        });
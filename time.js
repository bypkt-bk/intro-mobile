const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

fetch('https://learningportal.ocsc.go.th/learningspaceapi/localdatetime', { signal: controller.signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => clearTimeout(timeoutId));

function formatThaiDateTime(datetimeStr) {
    const date = new Date(datetimeStr);

    // ดึงส่วนประกอบของวันเวลา
    const day = date.getDate();
    const month = date.getMonth(); // 0-11
    const year = date.getFullYear() + 543; // แปลงเป็นพ.ศ.
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // ชื่อเดือนภาษาไทย
    const thaiMonths = [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    // รูปแบบวันที่และเวลา
    return `วันที่ ${day} ${thaiMonths[month]} ${year} เวลา ${hours}:${minutes}:${seconds} น.`;
}

function fetchDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const errorElement = document.getElementById('error');

    fetch('https://learningportal.ocsc.go.th/learningspaceapi/localdatetime')
        .then(response => {
            if (!response.ok) {
                throw new Error('ระบบเครือข่ายล้มเหลว');
            }
            return response.json();
        })
        .then(data => {
            errorElement.textContent = ''; // ล้างข้อความ error
            const formattedDateTime = formatThaiDateTime(data.datetime);
            datetimeElement.textContent = formattedDateTime;
        })
        .catch(error => {
            if (error.message === 'ระบบเครือข่ายล้มเหลว' || error.name === 'TypeError') {
                errorElement.textContent = 'ระบบเครือข่ายล้มเหลว';
            } else {
                errorElement.textContent = 'เกิดข้อผิดพลาด: ' + error.message;
            }
        });
}

// เรียก API ครั้งแรกทันที
fetchDateTime();

// อัปเดตทุก 1 วินาที (1000 มิลลิวินาที)
setInterval(fetchDateTime, 1000);
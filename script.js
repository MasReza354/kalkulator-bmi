// Menunggu DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
  // Mendapatkan elemen-elemen yang diperlukan
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultDiv = document.getElementById('result');
  const bmiValue = document.getElementById('bmiValue');
  const bmiCategory = document.getElementById('bmiCategory');
  const bmiMessage = document.getElementById('bmiMessage');
  const standardRadios = document.getElementsByName('standard');

  // Fungsi untuk menghitung BMI
  function calculateBMI(weight, height) {
    // Konversi tinggi dari cm ke m
    const heightInMeters = height / 100;
    // Hitung BMI
    return weight / (heightInMeters * heightInMeters);
  }

  // Fungsi untuk menentukan kategori BMI berdasarkan standar
  function getBMICategory(bmi, standard) {
    if (standard === 'indonesia') {
      if (bmi < 18.5) {
        return {
          category: 'Berat Badan Kurang',
          message:
            'Anda berada di bawah berat badan ideal. Disarankan untuk meningkatkan asupan nutrisi.',
          className: 'underweight',
        };
      } else if (bmi >= 18.5 && bmi < 23) {
        return {
          category: 'Berat Badan Normal',
          message:
            'Selamat! Berat badan Anda ideal. Pertahankan pola makan sehat dan olahraga teratur.',
          className: 'normal',
        };
      } else if (bmi >= 23 && bmi < 25) {
        return {
          category: 'Berat Badan Berlebih',
          message:
            'Anda memiliki berat badan berlebih. Disarankan untuk meningkatkan aktivitas fisik dan memperhatikan pola makan.',
          className: 'overweight',
        };
      } else if (bmi >= 25 && bmi < 30) {
        return {
          category: 'Obesitas I',
          message:
            'Anda berada dalam kategori obesitas tingkat I. Konsultasikan dengan dokter atau ahli gizi untuk program penurunan berat badan.',
          className: 'obesity',
        };
      } else {
        return {
          category: 'Obesitas II',
          message:
            'Anda berada dalam kategori obesitas tingkat II. Sangat disarankan untuk berkonsultasi dengan dokter untuk penanganan lebih lanjut.',
          className: 'obesity',
        };
      }
    } else {
      // Standar WHO
      if (bmi < 18.5) {
        return {
          category: 'Berat Badan Kurang',
          message:
            'Anda berada di bawah berat badan ideal. Disarankan untuk meningkatkan asupan nutrisi.',
          className: 'underweight',
        };
      } else if (bmi >= 18.5 && bmi < 25) {
        return {
          category: 'Berat Badan Normal',
          message:
            'Selamat! Berat badan Anda ideal. Pertahankan pola makan sehat dan olahraga teratur.',
          className: 'normal',
        };
      } else if (bmi >= 25 && bmi < 30) {
        return {
          category: 'Berat Badan Berlebih',
          message:
            'Anda memiliki berat badan berlebih. Disarankan untuk meningkatkan aktivitas fisik dan memperhatikan pola makan.',
          className: 'overweight',
        };
      } else {
        return {
          category: 'Obesitas',
          message:
            'Anda berada dalam kategori obesitas. Konsultasikan dengan dokter atau ahli gizi untuk program penurunan berat badan.',
          className: 'obesity',
        };
      }
    }
  }

  // Fungsi untuk menampilkan hasil BMI
  function showResult(bmi, categoryInfo) {
    // Tampilkan hasil dengan 1 angka di belakang koma
    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = categoryInfo.category;
    bmiMessage.textContent = categoryInfo.message;

    // Hapus semua class kategori sebelumnya
    bmiValue.className = 'bmi-value';
    bmiCategory.className = 'bmi-category';

    // Tambahkan class kategori yang sesuai
    bmiValue.classList.add(categoryInfo.className);
    bmiCategory.classList.add(categoryInfo.className);

    // Tampilkan div hasil dengan animasi
    resultDiv.classList.add('show');
    resultDiv.classList.add('fade-in');
  }

  // Event listener untuk tombol hitung
  calculateBtn.addEventListener('click', function () {
    // Validasi input
    if (!weightInput.value || !heightInput.value) {
      alert('Mohon masukkan berat badan dan tinggi badan Anda!');
      return;
    }

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (weight <= 0 || height <= 0) {
      alert('Berat badan dan tinggi badan harus lebih dari 0!');
      return;
    }

    // Dapatkan standar yang dipilih
    let selectedStandard = 'indonesia';
    standardRadios.forEach((radio) => {
      if (radio.checked) {
        selectedStandard = radio.value;
      }
    });

    // Hitung BMI
    const bmi = calculateBMI(weight, height);

    // Dapatkan kategori BMI
    const categoryInfo = getBMICategory(bmi, selectedStandard);

    // Tampilkan hasil
    showResult(bmi, categoryInfo);
  });

  // Event listener untuk input (agar bisa menggunakan enter)
  [weightInput, heightInput].forEach((input) => {
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        calculateBtn.click();
      }
    });
  });
});

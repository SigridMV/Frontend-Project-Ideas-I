function changeBackgroundColor() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;

    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = selectedColor;
  }
//your JS code here. If required.
const gridContainer = document.getElementById('grid-container');
    const blockIdInput = document.getElementById('block_id');
    const colorInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('Reset');

    changeButton.addEventListener('click', () => {
      const blockId = blockIdInput.value;
      const color = colorInput.value;

        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

      const gridItem = document.getElementById(blockId);
      if (gridItem) {
        gridItem.style.backgroundColor = color;
      } else {
        alert('Invalid Block ID');
      }
    });

    resetButton.addEventListener('click', () => {
      const gridItems = document.querySelectorAll('.grid-item');
      gridItems.forEach(item => {
          item.style.backgroundColor = 'transparent';
      });
      blockIdInput.value = '';
      colorInput.value = '';
    });
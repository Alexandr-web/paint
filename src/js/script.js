import colors from './colors';

const paint = () => {
  const obj_line = {
    color: '#000',
    width: 2.5
  }

  let painting = false;

  const createColors = () => {
    const list = document.querySelector('.wrapper__colors');

    colors.map(color => {
      const block = `<li class="wrapper__colors-item" style="background: ${color};"></li>`;
      list.innerHTML += block;
    });
  } 

  createColors();

  const moveOnCasnvas = () => {
    const canvas = document.querySelector('.wrapper__canvas');
    const ctx = canvas.getContext('2d');
    const height_canvas = window.getComputedStyle(canvas).height.replace(/px/, '');
    const width_canvas = window.getComputedStyle(canvas).width.replace(/px/, '');

    canvas.height = height_canvas;
    canvas.width = width_canvas;

    canvas.addEventListener('mousemove', e => {
      const x = e.offsetX;
      const y = e.offsetY;

      if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mouseleave', () => painting = false);
    canvas.addEventListener('mouseup', () => painting = false);
    canvas.addEventListener('mousedown', () => painting = true);

    setSettingsLine();
  }

  moveOnCasnvas();

  const choiceColorOfLine = () => {
    const colors_blocks = document.querySelectorAll('.wrapper__colors-item');

    const showActiveElement = num => colors_blocks[num].classList.add('active-color');
    const hideActiveElement = () => colors_blocks.forEach(color => color.classList.remove('active-color'));

    colors_blocks.forEach((color, index) => {
      color.addEventListener('click', () => {
        hideActiveElement();
        showActiveElement(index);

        obj_line.color = colors[index];
        setSettingsLine();
      });
    });
  }

  choiceColorOfLine();

  const changeWeightOfLine = () => {
    const range = document.querySelector('.wrapper__weight-input');

    range.addEventListener('change', () => {
      obj_line.width = range.value;
      setSettingsLine();
    });
  }

  changeWeightOfLine();

  const fillCanvas = () => {
    const colors_blocks = document.querySelectorAll('.wrapper__colors-item');
    const canvas = document.querySelector('.wrapper__canvas');
    const ctx = canvas.getContext('2d');
    const btn = document.querySelector('.wrapper__btns-item[data-btn="fill"]');
    const height_canvas = window.getComputedStyle(canvas).height.replace(/px/, '');
    const width_canvas = window.getComputedStyle(canvas).width.replace(/px/, '');

    const showActiveElement = num => colors_blocks[num].classList.add('active-color');
    const hideActiveElement = () => colors_blocks.forEach(color => color.classList.remove('active-color'));

    ctx.rect(0, 0, width_canvas, height_canvas);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    btn.addEventListener('click', () => {
      colors_blocks.forEach((color, index) => {
        if (color.classList.contains('active-color')) {
          hideActiveElement();
          showActiveElement(index);
  
          ctx.rect(0, 0, width_canvas, height_canvas);
          ctx.fillStyle = colors[index];
          ctx.fill();
        }
      });
    });
  }

  fillCanvas();

  const saveImage = () => {
    const btn = document.querySelector('.wrapper__btns-item[data-btn="save"]');
    const canvas = document.querySelector('.wrapper__canvas');

    btn.addEventListener('click', () => {
      const link = document.createElement('a');
      const data = canvas.toDataURL('image/png');

      link.download = 'Paint app';
      link.href = data;
      link.click();
    });
  }

  saveImage();

  function setSettingsLine() {
    const canvas = document.querySelector('.wrapper__canvas');
    const ctx = canvas.getContext('2d');

    ctx.lineWidth = obj_line.width;      
    ctx.strokeStyle = obj_line.color;  
  }
}

paint();
import {
  lessons,
  account,
  game,
  setting,
  level,
  grey,
  red,
  transparent,
  whiteSolid,
} from '../config';
export const getColorGradient = (colors: string) => {
  let checkColors: string[] = [];
  switch (colors) {
    // nút màu cam dùng trong phần Lessons
    case 'lessons':
      checkColors = [lessons.color1, lessons.color2];
      break;
    // nút màu xanh lá cây dùng trong phần Account
    case 'account':
      checkColors = [account.color1, account.color2];
      break;
    // nút màu xanh da trời dùng trong phần Game
    case 'game':
      checkColors = [game.color1, game.color2];
      break;
    // nút màu xanh ??? (ko rõ xanh gì) dùng trong phần Setting
    case 'setting':
      checkColors = [setting.color1, setting.color2];
      break;
    // nút màu vàng dùng trong tab Level phần Setting
    case 'level':
      checkColors = [level.color1, level.color2];
      break;
    // nút màu xám dùng trong button, ...
    case 'grey':
      checkColors = [grey.color1, grey.color2];
      break;
    // nút màu đỏ dùng trong button, ...
    case 'red':
      checkColors = [red.color1, red.color2];
      break;
    // nút nền trong suốt + có outline trắng
    case 'transparent':
      checkColors = [transparent, transparent];
      break;
  }
  return checkColors;
};

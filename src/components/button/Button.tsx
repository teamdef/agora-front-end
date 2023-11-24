interface ButtonProps {
  type: 'Disabled' | 'Normal' | 'Hover' | 'Pressed' | 'Card' | 'Popup';
  style: 'Primary' | 'Small' | 'Outlined';
  src: string;
}
const Button = ({ type, style, src }) => {
  return <div></div>;
};

export default Button;

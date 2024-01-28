import styled from 'styled-components';
import IconMap from '~/data/IconMap.json';

export type IconSrc = keyof typeof IconMap;

interface Props {
  src: IconSrc;
  width?: string;
  height?: string;
}
const Icon = ({ src, width, height }: Props) => {
  return <Img src={IconMap[src]} width={width} height={height} />;
};

const Img = styled.img<Omit<Props, 'src'>>`
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  object-fit: cover;
  align-self: center;
`;

export default Icon;

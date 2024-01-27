import styled from 'styled-components';
import IllustMap from '~/data/illustMap.json';

export type IllustSrc = keyof typeof IllustMap;

interface Props {
  src: IllustSrc;
  width?: string;
  height?: string;
}
const Illust = ({ src, width, height }: Props) => {
  return <Img src={IllustMap[src]} width={width} height={height} />;
};

const Img = styled.img<Omit<Props, 'src'>>`
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  object-fit: cover;
  align-self: center;
`;

export default Illust;

import { Container } from './styles';
import { IoIosArrowDropup } from 'react-icons/io';

import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

function FloatingButton() {
  return (
    <Container>
      <Link
        to="scroll"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        href=""
      >
        <IoIosArrowDropup />
      </Link>
    </Container>
  );
}

export default FloatingButton;

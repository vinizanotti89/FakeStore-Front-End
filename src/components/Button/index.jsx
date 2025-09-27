import PropTypes from 'prop-types';
import { ContainerButton } from './styles';

export function Button({ children, ...props }) {
    return <ContainerButton {...props}>{children}</ContainerButton>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
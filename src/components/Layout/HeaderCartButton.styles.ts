import styled, { keyframes } from 'styled-components';

export const CartBadge = styled.span`
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
`;

export const CartButton = styled.button`
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;

    &:hover,
    &:active {
        background-color: #2c0d00;
    }

    &:hover ${CartBadge},
    &:active ${CartBadge}{
        background-color: #92320c;
    }
`;

export const CartIcon = styled.span`
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
`;

const KeyframesBump = keyframes`
    0% {
        transform: scale(1);
    }
    10% {
        transform: scale(0.9);
    }
    30% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
`;

export const Bump = styled.span`
  animation: ${KeyframesBump} 300ms ease-out;
`;
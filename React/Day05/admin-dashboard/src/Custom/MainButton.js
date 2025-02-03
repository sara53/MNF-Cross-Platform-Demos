import styled from "styled-components";

const MainButton = styled.button`
	background: linear-gradient(140.14deg, #a3a2d8 15.05%, #0d1034 114.99%)
		padding-box;
	border-radius: 7px;
	border: 2px solid transparent;
	text-shadow: 1px 1px 1px #00000040;

	padding: 10px 40px;
	line-height: 20px;
	cursor: pointer;
	transition: all 0.3s;
	color: white;
	font-size: 18px;
	font-weight: 500;
	&:hover {
		box-shadow: none;
		opacity: 80%;
	}
`;

export { MainButton };

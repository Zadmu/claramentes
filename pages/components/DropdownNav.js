import React, {useState} from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddAssignment from './AddAssignment';


const DropdownNav = ({pages, title}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};

    const renderedOptions = pages.map((page) => {
		return(
			<div key = {page.path}>
				<Link href = {`/${page.path}`}>
                    <MenuItem style = {{color: '#F4EED9', fontFamily: 'Inter', fontSize: '17px'}} onClick={handleClose}>{page.title}</MenuItem>
                </Link>
			</div>
		);
	});


	return(
		<div>
			<Button style = {{color: '#E2D696', fontSize: '15px', fontWeight: 'bold', fontFamily: 'Inter'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				{title}
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				PaperProps = {{
					style: {
						background: '#323855'
					}
				}}
			>
				{renderedOptions}
			</Menu>
		</div>
	);

}

export default DropdownNav;
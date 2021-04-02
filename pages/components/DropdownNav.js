import React, {useState} from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
                    <MenuItem onClick={handleClose}>{page.title}</MenuItem>
                </Link>
			</div>
		);
	});


	return(
		<div>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				{title}
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{renderedOptions}
			</Menu>
		</div>
	);

}

export default DropdownNav;
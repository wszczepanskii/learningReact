export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
	// const ButtonsContainer = buttonsContainer;

	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}


export default function Button({ Icon, mode = 'filled', children, ...props}) {
    // Todo: Build this component!
    let className = 'button ' + mode + '-button ';
    if (Icon) {
        className = className + 'icon-button'
    }

    
 
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
 
    return (
           <button className={className} {...props}>
            { Icon === undefined ? null : <span className="button-icon"> <Icon /></span> }
            {children}    
           </button>
    )
}

export default function Button({children, mode = filled, Icon, ...props}) {
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
    console.log(Icon);
 
    let className = "button " + {mode} + "-button";
    
    if(Icon){
        className = "icon-button " + className;
    }

    return(
        <button className={className} {...props}>
            {Icon !== undefined ? <span className="button-icon">{Icon}</span> : null}
            {children}
        </button>
    )
}

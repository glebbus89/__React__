import PropTypes from 'prop-types';





function Messages({id, text}) {


    

    return ( 
        <div>
            <h2>{id}</h2>
            <p>{text}</p>
        </div>
    );
}

Messages.propTypes = {
    id: PropTypes.number.isRequired,    
    text: PropTypes.string.isRequired,
};

export default Messages;


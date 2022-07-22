function Todo(props) {
    function buttonHandler () {
        console.log('CLicked' + props.text);
    }

    return (
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={buttonHandler}>{props.button}</button>
        </div>
      </div>
    );
  }
  
  export default Todo;

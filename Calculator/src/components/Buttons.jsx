
function Buttons() {
    const buttons = ['1','2','3','4',
                     '5','6','7','8',
                     '9','+','-','*',
                     '/','.','C'];

    return (
        <div className='btn-container'>
            {buttons.map((button, index) => (
                <button key={index} className='btn-primary btn'>
                    {button}
                </button>
            ))}
        </div>
    );
}

export default Buttons;

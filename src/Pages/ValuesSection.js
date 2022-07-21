import CardSintetic from '../components/Card'

function ValuesSection() {
    return (
        <>
            <div className='container p-5 my-3'>
                <h3 className='mb-5'>OUR VALUES</h3>
                <div className='d-flex justify-content-lg-around'>
                    <CardSintetic cardType='orange' title='INNOVATIVE' color="#EB7A70" border=".2em solid #E35044" />
                    <CardSintetic cardType='green' title='LOYALTY' color="#689970" border=".2em solid #547E5E" />
                    <CardSintetic cardType='blue' title='RESPECT' color="#5497C3" border=".2em solid #4E88B1" />
                </div>
            </div>
        </>
    );
}

export default ValuesSection;
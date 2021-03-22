import React, {useState} from 'react';
import Beer from './Beer';
import Modal from 'react-modal';


//modal styles
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

//binding Modal to app.element
Modal.setAppElement('#root')

function Carousel(props) {
    const allBeers = [...props.beers];
    const [modalIsOpen, setIsOpen] = React.useState(false);

    var subtitle;
    function openModal(){
        setIsOpen(true);
    }    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

    function closeModal(){
    setIsOpen(false);
    }
  
    return (
    //     <div>
    //     <button onClick={openModal}>Open Modal</button>
    //     <Modal
    //       isOpen={modalIsOpen}
    //       onAfterOpen={afterOpenModal}
    //       onRequestClose={closeModal}
    //       style={customStyles}
    //       contentLabel="Example Modal"
    //     >
 
    //       <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
    //       <button onClick={closeModal}>close</button>
    //       <div>I am a modal</div>
    //       <form>
    //         <input />
    //         <button>tab navigation</button>
    //         <button>stays</button>
    //         <button>inside</button>
    //         <button>the modal</button>
    //       </form>
    //     </Modal>
    //   </div>
        <div className="carousel-container">
            {allBeers.map((beer) => <Beer key={beer.name} beer={beer} />)}
        </div>
    );
}

export default Carousel;
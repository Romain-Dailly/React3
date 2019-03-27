import  React  from  'react';

const  GenerateCharacter = ({ selectCharacter }) => {
    return (
        <div  className="GenerateCharacter">
        <button  onClick={selectCharacter}
            className="retry">New Quote ?</button>
        </div>
    );
};

export  default  GenerateCharacter;
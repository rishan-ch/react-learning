// import Panel from './Panel.js';
// import { getImageUrl } from './utils.js';

//let currentPerson;

export default function Profile({ person }) {
  let source = getImageUrl(person);
  return (
    <Panel>
        //previously, global var currentPerson was used which casued repeating bugs.
        //passing the person's name and image source for making it independent and pure
      <Header name={person.name}/>
      <Avatar name={person.name} 
        src={source}/>
    </Panel>
  )
}


//using props for purity
function Header({name}) {
  return <h1>{name}</h1>;
}

function Avatar({name,src}) {
  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width={50}
      height={50}
    />
  );
}

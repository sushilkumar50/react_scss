// used when you need to return multipe adjecent elements 
// but dont want to encole inside a wrapping div
// its equivalent to one React.createElement() call inside component you use it
// another way is using Reacts own Fragment component to wrap your content

const Aux = props => props.children

export default Aux;
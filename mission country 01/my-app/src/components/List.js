import Country from './Country'

export default function List(props){
    const {list} = props

    const sortedList = list.sort((a,b) => a.name.common > b.name.common ? 1 : -1)

    return(
        <ul>
        <Country list = {sortedList}/>        
        </ul>
    )
}
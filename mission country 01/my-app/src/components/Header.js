import Search from "./Search";

export default function Header(props) {
  return <Header>
        <h1>Countries <span>({props.num})</span></h1>
          <Search />
      </Header>
    
  ;
}

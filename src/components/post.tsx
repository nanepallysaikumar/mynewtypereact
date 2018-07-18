import * as React from 'react';
import { connect} from 'react-redux';
import {fetchposts} from '../actions/postaction';

interface Iprp {
    fetchposts?: () => any,
    postdata: any,

}

class Post extends React.Component<Iprp,{}> {
    componentWillMount() {
        this.props.fetchposts;
    }
  render() {
      let books = this.props.postdata.map((book:any, index:number) => {
        return(
            <div key={index}>
                <h1>Books details</h1>
                <hr/>
                <h3>{book.title}</h3>
                <p>{book.body}</p>
             </div>
        );
      });
    return (
      <div>
       {books}
      </div>
    )
  }
}
const mapStateToProps = (state: any) => ({
    postdata: state.posts.items
})
export default connect(mapStateToProps,{fetchposts})(Post);
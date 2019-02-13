import React, { Component } from "react";
import { Auction } from "../requests";
import NewAuctionForm from './NewAuctionForm';

class AuctionNewPage extends Component {
  constructor(props){
      super(props)
      this.state = {
          errors: []
      };
      this.createAuction = this.createAuction.bind(this);
  };

  createAuction(params){
      Auction.create(params).then(data=>{
          if(data.errs){
              this.setState({errors: data.erros})
          }else{
              this.props.history.push(`/auctions/${data.id}`)
          };
      })
  };

  render() {
    return (
      <main>
        <h1>Auction New Page</h1>
        <NewAuctionForm
          errors={this.state.errors}
          onSubmit={this.createAuction}
        />
      </main>
    )
  };
};
export default AuctionNewPage;
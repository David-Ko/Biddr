import React, {Component} from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import {Auction, Bid} from '../requests';
import NewBidForm from './NewBidForm';

class AuctionShowPage extends Component {
    constructor(props){
        super(props);
        this.state={
            auction: null,
            loading: true
        }
        this.createBid = this.createBid.bind(this);
    }

    createBid(params) {
        Bid.create(params).then(data => {
        //   if (data.errors) {
            // this.setState({ errors: data.errors });
        //   } else {
            this.props.history.push(`/auctions/${data.auction.id}`);
        //   }
        });
    }

    componentDidMount(){
        let id = this.props.match.params.id
        Auction.one(id).then(auction=>{
            this.setState({auction: auction, loading: false})
        })
    }
    
    render(){
        if (this.state.loading){
            return (<h1>
                Loading...
            </h1>)
        }
        if (!this.state.auction){
            return (
                <h1>This auction doesn't exist</h1>
            )
        };
        return (
            <main>
                <h1>Auction Details</h1>
                <AuctionDetails {...this.state.auction}/>
                
                <NewBidForm onSubmit={this.createBid}/>
            
                <h3>Bids</h3>
                <BidList 
                    bids={this.state.auction.bids}
                    />
            </main>
        )
    }
}
export default AuctionShowPage;
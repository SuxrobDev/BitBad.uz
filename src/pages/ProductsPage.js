import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import {FaArrowRight} from "react-icons/fa";
import {FaArrowLeft} from "react-icons/fa";
import Card from '../components/card/Card';
import Title from '../components/title';
import ApiServices from '../services/ApiServices';
import Loader from '../components/loader';
import {get} from "lodash";
import {connect} from "react-redux";
import {fetchProducts, fetchProductsByCategory} from "../store/actions";
const StyledProductsPage = styled.div`
    .category{
        background-color: #fff;
        border-radius: 15px;
    }
`;
const StyledUl = styled.ul`
  
  li {
    list-style-type: none;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: rgba(51, 77, 110, 0.7);
    padding-bottom: 10px;
    cursor: pointer;
  }
`;
const ProductsPage = ({products,isFetched,fetchProductsDispatch,fetchProductsByCategoryDispatch}) => {
        /*const [products,setProducts] = useState({data:[],isFetched:false})
        const [limit] = useState(10);
        const [loading,setLoading] = useState(true)
        /!*useEffect(() => {
            ApiServices.getProducts({}).then((res) => {
                if(res && res.data){
                    setLoading(false)
                    setProducts(({data, isFetched}) => ({data:res.data, isFatched: true}))
                }
            }).catch(e => {console.log(e); setLoading(false); setProducts({data:[] , isFatched:true})})
        },[])*!/
        const {data:{results,count} = {},isFetched} = products;
        const handlePageClick = ({selected}) =>{
            setLoading(true)
            setProducts(({data,isFetched}) => ({data,isFatched:false}))
            const offset = selected * limit;
            ApiServices.getProducts({limit,offset}).then((res) => {
                if(res && res.data){
                    setLoading(false)
                    setProducts(({data, isFetched}) => ({data:res.data, isFatched: true}))
                }
            }).catch(e => {console.log(e);setLoading(false); setProducts({data:[] , isFatched:true})});
        }*/
    useEffect(() => {
        fetchProductsDispatch()
    }, [])
    return (
        <StyledProductsPage className="p-4">
            <div className="row">
                <div className="category col-3 mb-4 p-4">
                    <Title size={"17px"} weight={"600"}>KATEGORIYALAR</Title>
                    <StyledUl>
                        <li>Barchasi</li>
                        <li onClick={()=>fetchProductsByCategoryDispatch(2)}>Maishiy texnikalar</li>
                        <li onClick={()=>fetchProductsByCategoryDispatch(1)}>Bad mahsulotlari</li>
                        <li onClick={()=>fetchProductsByCategoryDispatch(3)}>Aqlli texnikalar</li>
                        <li onClick={()=>fetchProductsByCategoryDispatch(4)}>Oshxona jihozlari</li>
                    </StyledUl>
                </div>
                {isFetched ? products && products.map((item) => <div className="col-3 mb-4" key ={item.id}>
                    <Card {...item}/>
                </div>) : <Loader loading={true}/>}
            </div>
            <div className="row justify-content-center mt-4">
            {/*<ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={count / limit}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />*/}
            </div>
        </StyledProductsPage>
    )
}
const mapStateToProps = (state) => {
    return {
        products: get(state, 'products.products.data.results', []),
        isFetched: get(state, 'products.products.isFetched', false)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsDispatch: () => dispatch(fetchProducts()),
        fetchProductsByCategoryDispatch: (id)=>dispatch(fetchProductsByCategory(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

import React, {useEffect, useState} from 'react';
import ModalBox from "./component/ModalBox";
import Button from "./component/Button";
import styled from 'styled-components';
import './styles.css';
import {selectRightValues, selectTableData, selectTitles} from "../../select/select";
import {getDataActionCreator, getTableActionCreator} from "../../redux/actionCreators/actionCreators";
import {connect} from "react-redux";

const Container = styled.div`
  display: block;
  margin: 5% 25%;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
`;
const Col = styled.div`
  display: inline-grid;
  align-content: center;
`;


const TablePage = ({tableData, displayProp, getDataFromTable, getData, titles}) => {

    useEffect(() => {
        getData();
        getDataFromTable();
    }, [getData,getDataFromTable]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(!tableData || !displayProp){
        return <p>data loading...</p>
    }

    return (
        <Container>

            <Header>
                <Col>
                    <p>User Table</p>
                </Col>
                <Col>
                    <Button
                        type='button'
                        children='Select Grid Columns'
                        onClick={handleShow}
                    />
                </Col>
            </Header>

            <ModalBox
                show={show}
                handleClose={handleClose}
            />

            <table id="inform">
                <thead>
                    <tr>
                        {
                            titles.map((item, index) => {
                                return (
                                    <th key={index}>{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    tableData.map((row) => {
                        return (
                            <tr key={row.number}>
                                {
                                    displayProp.map((item, index) => {
                                        return (
                                            <td key={index}>{row[item]}</td>
                                        )
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

        </Container>

    );
};
const mapStateToProps = (state) => ({
    tableData: selectTableData(state),
    displayProp: selectRightValues(state),
    titles: selectTitles(state),
});

const mapDispatchToProps = (dispatch) => ({
    getDataFromTable: () => dispatch(getTableActionCreator()),
    getData: () => dispatch(getDataActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);

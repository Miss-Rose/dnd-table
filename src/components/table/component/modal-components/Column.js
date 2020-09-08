import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Task from "./Task";
import {connect} from "react-redux";
import {searchProp} from "../../../../redux/actionCreators/actionCreators";
import {currentPosts} from "../../../../select/select";
import Input from "./input/Input";


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({column, properties, getSearchProp, searched, data}) => {

    return (
        <Container>
            <div>
                <h4>
                    {column.title}
                </h4>
                <hr/>
            </div>

            <div>
                {column.id === 'column-1' ?
                    <Input
                        type='text'
                        placeholder='search'
                        value={searched}
                        onChange={(e) => getSearchProp(e.target.value)}
                    />

                    : null}
            </div>

            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {
                            column.id === 'column-1' ? data.map((property, index) => (
                                    <Task key={property.id} property={property} index={index}/>
                                ))
                                :
                                properties.map((property, index) => (
                                    <Task key={property.id} property={property} index={index}/>
                                ))

                        }
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>

        </Container>
    );

};

const mapStateToProps = (state) => {
    return {
        searched: state.searchReducer.search,
        data: currentPosts(state)
    }
};

const mapDispatchToProps = (dispatch) => ({
    getSearchProp: (data) => dispatch(searchProp(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Column);

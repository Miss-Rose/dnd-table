import React from 'react';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from "./Column";
import {connect} from 'react-redux';
import {changeInList} from "../../../../redux/actionCreators/actionCreators";
import {selectData} from "../../../../select/select";


const Container = styled.div`
  display: flex;
`;

const App = ({state, setState}) => {

    if (!state.properties) {
        return <p>no data</p>
    }
    const onDragEnd = result => {
        const {destination, source, draggableId} = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];
        if (start === finish) {
            const newPropertyIds = Array.from(start.propertyIds);
            newPropertyIds.splice(source.index, 1);
            newPropertyIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                propertyIds: newPropertyIds,
            };
            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setState(newState);
            return;
        }
        const startPropIds = Array.from(start.propertyIds);
        startPropIds.splice(source.index, 1);
        const newStart = {
            ...start,
            propertyIds: startPropIds,
        };
        const finishPropIds = Array.from(finish.propertyIds);
        finishPropIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            propertyIds: finishPropIds,
        };
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        setState(newState);
    };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Container>
                    {
                        state.columnOrder.map(columnId => {
                            const column = state.columns[columnId];
                            const newProps = column.propertyIds.map(
                                propertyIds => state.properties[propertyIds],
                            );
                            return <Column key={column.id} column={column} properties={newProps}/>;
                        })
                    }
                </Container>
            </DragDropContext>
        </div>
    );

};
const mapStateToProps = (state) => {
    return {
        state: selectData(state),
    }
};
const mapDispatchToProps = (dispatch) => ({
    setState: (data) => dispatch(changeInList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

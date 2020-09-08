import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border-bottom: 2px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#eaf2f7' : 'white')};
`;

const Task = ({ property, index}) => {

        return (
            <Draggable draggableId={property.id} index={index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {property.content}
                    </Container>
                )}
            </Draggable>
        );

};

export default Task;
import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #000;
  opacity: 0.2;
  z-index: 1;
  box-sizing: border-box;
  background-clip: padding-box;
  flex-shrink: 0;
  :hover {
    transition: all 2s ease;
  }
`;

const HorizontalWrapper = styled(Wrapper)`
  height: 11px;
  margin: -5px 0;
  border-top: 5px solid rgba(255, 255, 255, 0);
  border-bottom: 5px solid rgba(255, 255, 255, 0);
  cursor: row-resize;
  width: 100%;

  :hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .disabled {
    cursor: not-allowed;
  }
  .disabled:hover {
    border-color: transparent;
  }
`;

const VerticalWrapper = styled(Wrapper)`
  width: 11px;
  margin: 0 -5px;
  border-left: 5px solid rgba(255, 255, 255, 0);
  border-right: 5px solid rgba(255, 255, 255, 0);
  cursor: col-resize;

  :hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .disabled {
    cursor: not-allowed;
  }
  .disabled:hover {
    border-color: transparent;
  }
`;

class Resizer extends PureComponent {
  render() {
    const {
      index,
      split = 'vertical',
      onClick = () => {},
      onDoubleClick = () => {},
      onMouseDown = () => {},
      onTouchEnd = () => {},
      onTouchStart = () => {},
      onMouseOver = () => {},
    } = this.props;

    const props = {
      className: this.props.className,
      ref: (_) => (this.resizer = _),
      'data-attribute': split,
      'data-type': 'Resizer',
      onMouseDown: (event) => onMouseDown(event, index),
      onTouchStart: (event) => {
        event.preventDefault();
        onTouchStart(event, index);
      },
      onTouchEnd: (event) => {
        event.preventDefault();
        onTouchEnd(event, index);
      },
      onClick: (event) => {
        if (onClick) {
          event.preventDefault();
          onClick(event, index);
        }
      },
      onDoubleClick: (event) => {
        if (onDoubleClick) {
          event.preventDefault();
          onDoubleClick(event, index);
        }
      },
      onMouseOver: (event) => {
        if (onMouseOver) {
          event.preventDefault();
          onMouseOver(event, index);
        }
      },
    };

    return split === 'vertical' ? (
      <VerticalWrapper {...props}>{this.props.inner ?? null}</VerticalWrapper>
    ) : (
      <HorizontalWrapper {...props}>
        {this.props.inner ?? null}
      </HorizontalWrapper>
    );
  }
}

export default Resizer;

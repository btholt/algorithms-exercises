import _ from "lodash";
import React from "react";

const nodeStyle = {
  width: "50%"
};

const nullChildStyle = _.assign({}, nodeStyle, {});

const treeStyle = {
  boxSizing: "border-box",
  textAlign: "center"
};

const childrenStyle = {
  display: "flex",
  flexWrap: "nowrap"
};

const diag = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "100% 100%, auto",
  padding: "20px 0 0",
  margin: 0,
  fontSize: "12px"
};

const diagLeft = _.merge(
  {
    background:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 1 L99 0 L49 49 L50 50' fill='black' /></svg>\")"
  },
  diag
);
const diagRight = _.merge(
  {
    background:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M1 0 L0 1 L49 50 L50 49' fill='black' /></svg>\")"
  },
  diag
);

const target = document.getElementById("target");

const findMaxDepth = (node) => {
  if (!node) return 0;
  const left = findMaxDepth(node.left);
  const right = findMaxDepth(node.right);
  return left > right ? left + 1 : right + 1;
};

export class TreeViz extends React.Component {
  render() {
    const maxDepth = findMaxDepth(this.props.root);
    const localTreeStyle = _.merge(
      { width: `${Math.pow(2, maxDepth + 1) * 5}px` },
      treeStyle
    );
    return (
      <div>
        <h1>Max Depth: {maxDepth}</h1>
        <div style={localTreeStyle} className="tree">
          <NodeViz {...this.props.root} level={1} isRoot={true} pruneLeft />
        </div>
      </div>
    );
  }
}

class NodeViz extends React.Component {
  render() {
    const localNodeStyle = _.merge({}, nodeStyle, {
      width: this.props.isRoot ? "100%" : "50%"
    });

    let children;
    if (this.props.right || this.props.left) {
      let left = this.props.left ? (
        <NodeViz
          level={this.props.level + 1}
          isLeft={true}
          isRoot={false}
          {...this.props.left}
        />
      ) : (
        <div style={nullChildStyle} />
      );
      let right = this.props.right ? (
        <NodeViz
          level={this.props.level + 1}
          isLeft={false}
          isRoot={false}
          {...this.props.right}
        />
      ) : (
        <div style={nullChildStyle} />
      );
      children = (
        <div style={childrenStyle}>
          {left}
          {right}
        </div>
      );
    }
    return (
      <div style={localNodeStyle}>
        <h2
          style={
            this.props.isRoot ? diag : this.props.isLeft ? diagLeft : diagRight
          }
        >
          {this.props.value}
          {this.props.height ? ` (${this.props.height})` : null}
        </h2>
        {children}
      </div>
    );
  }
}

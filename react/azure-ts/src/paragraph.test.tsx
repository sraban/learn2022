import React from "react";
import { shallow } from "enzyme";
import Paragraph from "./paragraph";

describe("Paragraph", () => {
    it('should render passed in string in a paragraph', () => {
        const paragraph = shallow(<Paragraph passedInText="Azure DevOps and SonarQube Rocks!" />);
        expect(paragraph).toMatchSnapshot();
    });
});
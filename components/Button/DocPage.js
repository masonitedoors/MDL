import React from "react";
import Button from "./react";

const ExampleCard = ({ children }) => (
  <div className="flex w-1/2 mx-auto mb-md">{children}</div>
);

const DocPage = () => (
  <>
    <h1>Button</h1>
    <p className="text-deepgray text-lg mb-lg">
      Buttons are critical in helping users accomplish the tasks we set out for
      them. Not all buttons are equal, but the main purpose of a button is to
      finish a task. Our buttons are based on Material and Apple.
    </p>
    <section>
      <h2 className="text-2xl font-bold">High</h2>
      <p className="mb-md">
        This is what a button of high importance looks like.{" "}
        <strong>Be aware buttons have radius & shadow.</strong>
      </p>

      <ExampleCard>
        <div className="w-1/2">
          <Button variant="primary" size="large">
            Button
          </Button>
        </div>
        <div className="w-1/2">
          <h3>Large Usage</h3>
          <p className="text-sm">
            For primary buttons use while on websites when hero buttons need to
            be larger.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard>
        <div className="w-1/2">
          <Button variant="primary">Button</Button>
        </div>
        <div className="w-1/2">
          <h3>Standard Usage</h3>
          <p className="text-sm">
            This is the standard size. Use this when you have a CTA or the main
            page task to accomplish for products or most circumstance.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard>
        <div className="w-1/2">
          <Button variant="primary" size="small">
            Button
          </Button>
        </div>
        <div className="w-1/2">
          <h3>Small Usage</h3>
          <p className="text-sm">
            Use this when you have primary task in a smaller area.
          </p>
        </div>
      </ExampleCard>
    </section>

    <section>
      <h2 className="text-2xl font-bold">Medium</h2>
      <p className="mb-md">
        This is what a button of high importance looks like. Be aware buttons
        have radius & shadow.
      </p>

      <ExampleCard>
        <div className="w-1/2">
          <Button variant="secondary" size="large">
            Button
          </Button>
        </div>
        <div className="w-1/2">
          <h3>Large Usage</h3>
          <p className="text-sm">
            For medium importance buttons use while on websites when hero
            buttons need to be larger.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard>
        <div className="w-1/2">
          <Button variant="secondary">Button</Button>
        </div>
        <div className="w-1/2">
          <h3>Standard Usage</h3>
          <p className="text-sm">
            Use this button to accomplish secondary tasks on a page.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard>
        <div className="w-1/2">
          <Button variant="secondary" size="small">
            Button
          </Button>
        </div>
        <div className="w-1/2">
          <h3>Small Usage</h3>
          <p className="text-sm">
            Use this when you have secondary task tasks to accomplish with
            little space.
          </p>
        </div>
      </ExampleCard>
    </section>

    <section>
      <h2>Low</h2>
      <p>This is what the low importance button looks like.</p>
      <ExampleCard>
        <div className="w-1/2">
          <Button variant="default" size="large">
            Button
          </Button>
        </div>
        <div className="w-1/2">
          <h3>Large Usage</h3>
          <p className="text-sm">
            For low importance buttons use while on websites when hero buttons
            need to be larger.
          </p>
        </div>
      </ExampleCard>
      <ExampleCard>
        <div className="w-1/2">
          <Button variant="default">Button</Button>
        </div>
        <div className="w-1/2">
          <h3>Standard Usage</h3>
          <p className="text-sm">
            Use the default button when you don't need emphasis on the task or
            take away from a primary task on page.
          </p>
        </div>
      </ExampleCard>
      <ExampleCard>
        <div className="w-1/2">
          <Button variant="default" size="small">
            Button
          </Button>
        </div>
        <div className="w-1/2">
          <h3>Small Usage</h3>
          <p className="text-sm">
            Use this when you don't need emphasis on a block level. Buttons like
            these are used in filters or pagination.
          </p>
        </div>
      </ExampleCard>
    </section>
  </>
);

export default DocPage;

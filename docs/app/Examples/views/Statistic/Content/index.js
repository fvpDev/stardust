import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Value'
      description='A statistic can contain a numeric, icon, image, or text value'
      examplePath='views/Statistic/Content/Values'
    />
    <ComponentExample examplePath='views/Statistic/Content/Props' />

    <ComponentExample
      title='Label'
      description='A statistic can contain a label to help provide context for the presented value'
      examplePath='views/Statistic/Content/Labels'
    />
  </ExampleSection>
)

export default Content

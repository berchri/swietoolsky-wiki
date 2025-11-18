import React, {type ReactNode} from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type {Props as DocSidebarProps} from '@theme-original/DocSidebar';
import type {WrapperProps} from '@docusaurus/types';
import SidebarDarkModeToggle from '../../components/SidebarDarkModeToggle';

type Props = WrapperProps<DocSidebarProps>;

export default function DocSidebarWrapper(props: Props): ReactNode {
  console.log('DocSidebarWrapper rendering');
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <DocSidebar {...props} />
      <SidebarDarkModeToggle />
    </div>
  );
}

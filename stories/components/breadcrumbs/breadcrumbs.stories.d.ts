import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../../../components/breadcrumbs';

declare const meta: Meta<typeof Breadcrumbs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultBreadcrumbs: Story;
export declare const BreadcrumbWithHiddenItems: Story;
export declare const BreadcrumbWithIcons: Story;
export declare const BreadcrumbsWithCustomMenu: Story;

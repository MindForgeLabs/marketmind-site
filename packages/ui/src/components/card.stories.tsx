import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader } from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <h3 className="text-sm font-semibold text-slate-50">Research Bundle</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-400">
          Deterministic artifact with reviewable provenance.
        </p>
      </CardContent>
    </Card>
  ),
};

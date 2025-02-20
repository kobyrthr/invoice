'use client';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import InputCalendar from '@/components/ui/input-calendar';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Typography } from '@/components/ui/typography';
import { PlusCircle } from '@phosphor-icons/react';
import { Fragment } from 'react';

export default function Home() {
  return (
    <div className="grid  bg-background items-center justify-items-center size-full p-8 pb-20 gap-16 sm:p-20 font-spartan">
      <Card className="border-0 overflow-hidden">
        <CardContent className="flex items-center gap-3 p-4">
          <Button
            variant="primary"
            className="h-fit gap-4 p-2 pr-4"
            IconLeft={() => (
              <PlusCircle
                height={24}
                width={24}
                weight="fill"
                className="text-white min-h-8 min-w-8"
              />
            )}
          >
            Icon Button
          </Button>
          <Button variant="primary">Button 2</Button>
          <Button variant="default">Button 3</Button>
          <Button variant="secondary">Button 4</Button>
          <Button variant="destructive">Button 5</Button>
          <Button variant="default" className="w-full">
            + Add New Item
          </Button>
        </CardContent>
      </Card>

      <Card className="border-0 overflow-hidden">
        <CardContent className="flex flex-col gap-3 p-4 max-w-2xl">
          <div className="flex flex-col">
            <Typography className="text-color-07" type="body">
              Heading L | Spartan Bold | 36px | 33px Line | -1 Spacing
            </Typography>
            <Typography asChild type="heading-l">
              <h1>Aliquam porttitor mauris sit amet orci Aenean</h1>
            </Typography>
          </div>

          <div className="flex flex-col">
            <Typography className="text-color-07" type="body">
              Heading M | Spartan Bold | 24px | 22px Line | -0.75 Spacing
            </Typography>
            <Typography asChild type="heading-m">
              <h2>Aliquam porttitor mauris sit amet orci Aenean</h2>
            </Typography>
          </div>

          <div className="flex flex-col">
            <Typography className="text-color-07" type="body">
              Heading S | Spartan Bold | 15px | 24px Line | -0.25 Spacing
            </Typography>
            <Typography asChild type="heading-s">
              <h3>Aliquam porttitor mauris sit amet orci Aenean</h3>
            </Typography>
          </div>

          <div className="flex flex-col">
            <Typography className="text-color-07" type="body">
              Heading M | Spartan Bold | 24px | 22px Line | -0.75 Spacing
            </Typography>
            <Typography type="body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis
            </Typography>
          </div>

          <div className="flex flex-col">
            <Typography className="text-color-07" type="body">
              Heading M | Spartan Bold | 24px | 22px Line | -0.75 Spacing
            </Typography>
            <Typography type="body-variant">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </Typography>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 overflow-hidden">
        <CardContent className="flex flex-row gap-3 p-4 max-w-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="input-1" variant="form-label">
                Text - Default
              </Label>
              <Input id="input-1" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="input-1" variant="form-label">
                Text - Filled
              </Label>
              <Input id="input-1" defaultValue="Lorem Ipsum Dolor" />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="input-1" variant="form-label">
                Text - Active
              </Label>
              <Input
                id="input-1"
                defaultValue="Currently Typing"
                className="border-color-02"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="input-1" variant="form-label">
                Payment Terms
              </Label>
              <Select>
                <SelectTrigger defaultValue="net-1" className="w-[240px]">
                  <SelectValue placeholder="Net 1 Day" />
                </SelectTrigger>
                <SelectContent
                  style={{ width: 'var(--radix-select-trigger-width)' }}
                  sideOffset={24}
                >
                  {[
                    'Net 1 Day',
                    'Net 7 Days',
                    'Net 14 Days',
                    'Net 30 Days',
                  ].map((item, index) => (
                    <Fragment key={item}>
                      {index > 0 ? <SelectSeparator /> : null}
                      <SelectItem value={item}>{item}</SelectItem>
                    </Fragment>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <InputCalendar />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}



## title: Meta&#xA;order: 1

Through meta, you can configure the data metadata information of the chart globally, and the configuration is carried out by the unit of field. The configuration on 'meta' affects the text information of all components at the same time.

## Configuration mode

Pass in a configuration with field name key, *MetaOption* as value, and set meta information for multiple fields at the same time.

```sign
{
  meta: {
    [field: string]: MetaOption
  }
}
```

Example:

```ts
{
  meta: {
    sale: {
      min: 0,
      max: 100,
    },
  }
}
```

## Detail configuration item

*MetaOption* The configuration is as follows:

### MetaOption.type

<description> *string* **optional**</description>

Declare the measurement type:

| Measure type               | Description                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Classification measurement | - cat: Classification measurement <br /> - timeCat: Time classification measurement                                                                                                                                                                                                                                                                  |
| Continuous measurement     | - linear: Linear measurement <br /> - time：Continuous time measurement <br /> - log: Log measurement <br /> - pow: Pow measurement<br /> - quantize：Segmentation measurement, where users can specify non-uniform segments <br /> - quantile: Equal measurement, according to the distribution of data automatically calculate segmentation <br /> |
| Constant measurement       | - identity: Constant measurement                                                                                                                                                                                                                                                                                                                     |

### MetaOption.alias

<description> *string* **optional**</description>

Data field display alias, scale is not internal awareness, external injection.

### MetaOption.values

<description> *any\[]* **optional**</description>

Input field, definition field.

### MetaOption.formatter

<description> *(value: any, index?: number) => any* **optional**</description>

The tick formatting function affects the display of data on Axis, Legend, and Tooltip.

### MetaOption.range

<description> *\[number, number]* **optional** *default:* `[0, 1]`</description>

Output field and value field represent the range available for drawing within the drawing range.

### MetaOption.sync

<description> *boolean | string* **optional**</description>

```ts
{
  meta: {
    {
      x: { sync: true },
      y: { sync: true },
      x1: { sync: 'x1' },
      x2: { sync: 'x1' },
    }
  }
}
```

Synchronous scale. sync: `boolean` is sync: \[key], The above case `x: { sync: true }` is equivalent to `x: { sync: 'x' }`，`y: { sync: true }` is equivalent to `y: { sync: 'y' }`，Therefore, with the above configuration, the measurement operation will be synchronized for fields X and Y and fields X1 and X2 respectively.

### MetaOption.min

<description> *any* **optional**</description>

Domain minimum value, d3 is the domain, ggplot2 is the limits, not valid under type.

### MetaOption.max

<description> *any* **optional**</description>

The maximum value of the domain. Invalid under type.

### MetaOption.minLimit

<description> *any* **optional**</description>

The smallest value of the domain in strict mode. Set to force ticks to start at the smallest.

### MetaOption.maxLimit

<description> *any* **optional**</description>

The maximum value of the domain in strict mode, which forces the ticks to end at the maximum.

### MetaOption.base

<description> *number* **optional**</description>

Log is valid. Base.

### MetaOption.exponent

<description> *number* **optional**</description>

Pow valid, exponent.

### MetaOption.nice

<description> *boolean* **optional**</description>

Automatically adjust min and Max.

### MetaOption.ticks

<description> *any\[]* **optional**</description>

Use to specify tick, with the highest priority.

### MetaOption.tickInterval

<description> *number* **optional**</description>

Tick interval, only for type and time type, takes precedence over tickCount.

### MetaOption.minTickInterval

<description> *number* **optional**</description>

The tick interval is minimal and applies only to linear.

### MetaOption.tickCount

<description> *number* **optional** *default:* `5`</description>

The number of tick.

### MetaOption.maxTickCount

<description> *number* **optional** *default:* `10`</description>

Ticks maximum.

### MetaOption.tickMethod

<description> *string | TickMethod* **optional**</description>

Algorithms for calculating ticks.

### MetaOption.showLast

<description> *boolean* **optional**</description>

Only applies to scale of type: 'time', forcing the last date tick to be displayed.

### MetaOption.mask

<description> *string* **optional**</description>

Time measures Time and is valid when TIMECAT. The underlying use \[fecha] (https://github.com/taylorhakes/fecha#formatting-tokens) for the date format, so for the mask strings can directly refer to their wording.

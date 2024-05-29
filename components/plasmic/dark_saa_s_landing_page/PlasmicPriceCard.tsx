// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iDYYucUMnPTZtZHWq6wa5S
// Component: f9fPDYp4wcZP

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: fciyd94IYsUr/component

import { useScreenVariants as useScreenVariants_6VyeGjXripsv } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6VYEGjXRIPSV/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: iDYYucUMnPTZtZHWq6wa5S/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: f9fPDYp4wcZP/css

createPlasmicElementProxy;

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight" | "flatCenter";
};
export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
};
type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {};
type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h4?: Flex__<"h4">;
  button?: Flex__<typeof Button>;
};

export interface DefaultPriceCardProps {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borders
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6VyeGjXripsv()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.freeBoxborders_flatLeft]: hasVariant(
            $state,
            "borders",
            "flatLeft"
          ),
          [sty.freeBoxborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.freeBoxprimary]: hasVariant($state, "primary", "primary")
        })}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4,
            {
              [sty.h4borders_flatCenter]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.h4borders_flatLeft]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.h4borders_flatRight]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Enterprise"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free"
            : "Pro"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zo97E,
            {
              [sty.textborders_flatCenter__zo97EeWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__zo97EBze32]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__zo97EOrSlh]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.textprimary__zo97EtZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Flexible power and security"
            : hasVariant($state, "borders", "flatLeft")
            ? "A complete analytics platform."
            : "A complete analytics platform."}
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__m21Dw)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/dark_saa_s_landing_page/images/linePricingpng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(projectcss.all, sty.columns__tJbo6, {
            [sty.columnsprimary__tJbo6TZbe7]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__nNoW4)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___2SFj, {
                [sty.imgborders_flatLeft___2SFjBze32]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitepng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column___1VoJu, {
              [sty.columnborders_flatRight___1VoJuOrSlh]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__k96Yw,
                {
                  [sty.textborders_flatLeft__k96YwBze32]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__k96YwOrSlh]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__k96YwtZbe7]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Everything in pro"
                : hasVariant($state, "borders", "flatLeft")
                ? "1 Product"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__wsBZo, {
            [sty.columnsborders_flatCenter__wsBZoeWl4W]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__wsBZoBze32]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsborders_flatRight__wsBZoOrSlh]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.columnsprimary__wsBZotZbe7]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__wDGdV)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__aFjki, {
                [sty.imgborders_flatLeft__aFjkiBze32]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitepng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__rvSOg)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__n1JSz,
                {
                  [sty.textborders_flatCenter__n1JSZeWl4W]: hasVariant(
                    $state,
                    "borders",
                    "flatCenter"
                  ),
                  [sty.textborders_flatLeft__n1JSzBze32]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__n1JSzorSlh]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__n1JSZtZbe7]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Volume discount"
                : hasVariant($state, "borders", "flatLeft")
                ? "Analytics board"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__s2Ln8, {
            [sty.columnsborders_flatCenter__s2Ln8EWl4W]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__s2Ln8Bze32]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsprimary__s2Ln8TZbe7]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__sRugu)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__tHzgL, {
                [sty.imgborders_flatLeft__tHzgLBze32]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitepng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column__edcrs, {
              [sty.columnborders_flatLeft__edcrsBze32]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__edcrsOrSlh]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__edcrstZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0BjVe,
                {
                  [sty.textborders_flatLeft___0BjVeBze32]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textprimary___0BjVEtZbe7]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatLeft")
                ? "Insights panel"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.column__dayos, {
              [sty.columnborders_flatLeft__dayosBze32]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__dayosOrSlh]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__dayostZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          />
        </div>
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns___90Dxj, {
              [sty.columnsborders_flatCenter___90DxjeWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft___90DxjBze32]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary___90DxjtZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__yGt3Y)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__jHo4O, {
                  [sty.imgborders_flatLeft__jHo4OBze32]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: "/plasmic/dark_saa_s_landing_page/images/checklistPricingWhitepng.png",
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__tBizw)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9CClr,
                  {
                    [sty.textborders_flatLeft___9CClrBze32]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary___9CClrtZbe7]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatLeft")
                  ? "CLI access"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__lhnI2, {
              [sty.columnsborders_flatCenter__lhnI2EWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__lhnI2TZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__iZjg2)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___3TuXg)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__frboc)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ngs8S,
                  {
                    [sty.textborders_flatCenter__ngs8SeWl4W]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textprimary__ngs8StZbe7]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Insights panel"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__noDa7, {
              [sty.columnsborders_flatCenter__noDa7EWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__noDa7TZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__f98Uc)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__enEdk)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "16px"
                    : "24px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__kd8Lr)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rqkZy,
                  {
                    [sty.textprimary__rqkZytZbe7]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"CLI access"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__ipCpf, {
              [sty.columnsborders_flatCenter__ipCpfeWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__ipCpftZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__rrzZb)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__xa3Pl)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__iHw3B)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5Eixx,
                  {
                    [sty.textprimary___5EixxtZbe7]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Automation features"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__rwgZq, {
              [sty.columnsborders_flatCenter__rwgZqeWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__rwgZqtZbe7]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__f4V7E)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___32NI)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/dark_saa_s_landing_page/images/checklistpng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column___7OkWp)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8NuWu,
                  {
                    [sty.textprimary___8NuWUtZbe7]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Team features"}
              </div>
            </div>
          </div>
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___0LNIw)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/dark_saa_s_landing_page/images/linePricingpng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatRight")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__t4Iq,
              {
                [sty.textborders_flatCenter__t4IQeWl4W]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__t4IqBze32]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__t4IqorSlh]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "$ 50"
              : hasVariant($state, "borders", "flatRight")
              ? "$ 800"
              : "$ 0"}
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nxGkm,
            {
              [sty.textborders_flatCenter__nxGkMeWl4W]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__nxGkmBze32]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__nxGkmorSlh]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Starting price, customizable"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free Forever"
            : "per project/month"}
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonborders_flatCenter]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.buttonborders_flatLeft]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.buttonborders_flatRight]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.buttonprimary]: hasVariant($state, "primary", "primary")
          })}
          color={hasVariant($state, "borders", "flatLeft") ? "white" : "blue"}
          endIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__nbOBh)}
              role={"img"}
            />
          }
          link={"#"}
          startIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__tQcaq)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iMMxA,
              {
                [sty.textborders_flatCenter__iMMxAeWl4W]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__iMMxABze32]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__iMMxAorSlh]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "Go Become pro"
              : hasVariant($state, "borders", "flatRight")
              ? "Everything is yours"
              : hasVariant($state, "borders", "flatLeft")
              ? "Claim Free"
              : "Go Become pro"}
          </div>
        </Button>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4", "button"],
  freeBox: ["freeBox", "h4", "button"],
  h4: ["h4"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h4: "h4";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPriceCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */

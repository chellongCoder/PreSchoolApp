import property from 'lodash/property';
import {
    compose,
    withHandlers,
    withStateHandlers,
    mapProps,
    lifecycle,
} from 'recompose';
import { upperFirst } from 'lodash';
interface IProps {
    fetchOnMount?: boolean;
    fetchOnPropsChange?: string[];
    valueNotInProps?: any;
}
const withFetcher = (
    name: string,
    fetchAPI: (props: any, actions: any) => Promise<any>,
    {
        fetchOnMount = false,
        fetchOnPropsChange = [],
        valueNotInProps = {},
    }: IProps = {}
) => {
    const Name = upperFirst(name);
    return compose(
        withStateHandlers(
            {
                [`${name}Fetcher`]: {
                    data: null,
                    isLoading: false,
                    error: null,
                },
            },
            {
                [`start${Name}Fetch`]: ({
                    [`${name}Fetcher`]: prevState,
                }) => () => ({
                    [`${name}Fetcher`]: {
                        ...prevState,
                        isLoading: true,
                    },
                }),
                [`receive${Name}Data`]: () => (data: any) => ({
                    [`${name}Fetcher`]: {
                        data,
                        isLoading: false,
                        error: null,
                    },
                }),
                [`receive${Name}Error`]: ({ [`${name}Fetcher`]: { data } }) => (
                    error: any
                ) => {
                    // TODO: Using Notification to show the error
                    return {
                        [`${name}Fetcher`]: {
                            data,
                            isLoading: false,
                            error: error || true,
                        },
                    };
                },
            }
        ),
        withHandlers({
            [`fetch${Name}`]: (props: any) => (actions: any) => {
                props[`start${Name}Fetch`]();
                fetchAPI(props, actions).then(
                    props[`receive${Name}Data`],
                    props[`receive${Name}Error`]
                );
            },
        }),
        fetchOnMount
            ? lifecycle({
                  componentDidMount() {
                      (this as any).props[`fetch${Name}`](valueNotInProps);
                  },
              })
            : Component => Component,
        fetchOnPropsChange.length > 0
            ? lifecycle({
                  componentDidUpdate(prevProps) {
                      const shouldFetch = fetchOnPropsChange.reduce(
                          (acc, key) => {
                              if (typeof key !== 'string') return acc;
                              if (
                                  property(key)(prevProps) !==
                                  property(key)(this.props)
                              ) {
                                  return true;
                              }
                              return acc;
                          },
                          false
                      );
                      if (shouldFetch)
                          (this as any).props[`fetch${Name}`](valueNotInProps);
                  },
              })
            : Component => Component,
        mapProps(props => {
            const {
                [`start${Name}Fetch`]: startFetch,
                [`receive${Name}Data`]: receiveData,
                [`receive${Name}Error`]: receiveError,
                ...rest
            }: any = props;
            return rest;
        })
    );
};

export default withFetcher;

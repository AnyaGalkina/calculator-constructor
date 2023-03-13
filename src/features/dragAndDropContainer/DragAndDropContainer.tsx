import React, { ReactElement, useState } from 'react';

import { setContent } from '../../common/utils';
import { useAppSelector, getCalculatorBlocksSideBar, getIsRuntime } from '../../store';

import styles from './DragAndDropContainer.module.css';

import { SideBarItemWrapper, Canvas } from './index';

export const DragAndDropContainer = (): ReactElement => {
    const isRuntime = useAppSelector(getIsRuntime);
    const calculatorBlocksPanel = useAppSelector(getCalculatorBlocksSideBar);

    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className={styles.dndContainer}>
            <div className={styles.panelContainer}>
                {isRuntime
                    ? null
                    : calculatorBlocksPanel.map(({ id, name, isDragged }, index) => {
                          return (
                              <SideBarItemWrapper
                                  index={index}
                                  setIsDragging={setIsDragging}
                                  id={id}
                                  key={name}
                                  isDragged={isDragged}
                              >
                                  {setContent(name)}
                              </SideBarItemWrapper>
                          );
                      })}
            </div>
            <div className={styles.canvasContainer}>
                <Canvas isDragging={isDragging} />
            </div>
        </div>
    );
};

declare module "react-native-keyboard-input" {
    import React from 'react';

    type ItemSelectedType = (globalID: string, args: any) => void;
    type RequestShowKeyboardType = (globaID: string) => void;

    // need to handle -1 default value
    enum ScrollBehavior {
        None,
        ScrollToBottomInvertedOnly,
        FixedOffset
    }

    export interface Keyboard {
        id?: string;
        [key: string]: any;
    }

    export interface CustomKeyboardViewProps {
        inputRef?: any;
        initialProps?: any;
        component?: string;
        onItemSelected?: ItemSelectedType;
    }

    export class CustomKeyboardView extends React.Component<CustomKeyboardViewProps> {
        constructor(props: CustomKeyboardViewProps);
    }

    export interface KeyboardAccesoryViewProps {
        renderContent?: () => React.ReactNode;
        onHeightChanged?: (height: number) => void;
        kbInputRef?: any;
        kbComponent?: string;
        kbInitialProps?: any;
        onItemSelected?: ItemSelectedType;
        onRequestShowKeyboard?: RequestShowKeyboardType;
        onKeyboardResigned?: () => void;
        iOSScrollBehavior?: ScrollBehavior;
        revealKeyboardInteractive?: boolean;
        manageScrollView?: boolean;
        requiresSameParentToManageScrollView?: boolean;
        addBottomView?: boolean;
        allowHitsOutsideBounds?: boolean;
    }

    export class KeyboardAccessoryView extends React.Component<KeyboardAccesoryViewProps> {
        constructor(props: KeyboardAccesoryViewProps);
    }

    export class KeyboardRegistry {
        static registerKeyboard(componentID: string, generator: () => React.ReactNode, params?: any): void;
        static getKeyboard: (componentID: string) => any;
        static getKeyboards: (componentIDs: Array<string>) => Array<Keyboard>;
        static getAllKeyboard: () => Array<Keyboard>;
        static addListener: (globalID: string, callback) => void;
        static notifyListeners: (globalID: string, args) => void;
        static removeListeners: (globalID: string) => void;
        static onItemSelected: ItemSelectedType;
        static requestShowKeyboard: RequestShowKeyboardType;
        static toggleExpandedKeyboard: (globalID: string) => void;
    }

    export class KeyboardUtils {
        static dismiss: () => void;
    }

    export class TextInputKeyboardManagerIOS {
        static setInputComponent: (textInputRef: any, options: any) => void;
        static removeInputComponent: (textInputRef: any) => void;
        static dismissKeyboard: () => void;
        static toggleExpandKeyboard: (textInputRef: any, expand: boolean, performLayoutAnimation?: boolean) => void;
    }
}

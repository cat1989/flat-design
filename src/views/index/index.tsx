import * as React from 'react'
import { View, Pane, Icon } from '@/components'
import { NavigationBar, SearchBar } from '@/components/bars'
import { Button, TextField, Switch } from '@/components/controls'
import { ActionSheet, Alert, WebView, Table, TableRow } from '@/components/views'
import image from '@/assets/images/Mail_2x.png'
import { TabBar } from '@/components/bars/tab-bar'

const Index: React.FC = () => {
    const [value, setValue] = React.useState('')
    const [visible, setVisible] = React.useState(false)
    const buttons = [
        {
            title: 'Delete Draft',
            onClick() {
                console.log('delete')
            },
        },
        {
            title: 'Save Draft',
            onClick() {
                console.log('save')
            },
        },
    ]
    const [checked, setChecked] = React.useState(false)
    const tabs = [
        {
            title: '首页',
            onClick() {

            },
        },
        {
            title: '我的',
            onClick() {

            },
        },
    ]
    return (
        <View>
            <NavigationBar
                topItem="Contacts"
                rightBarItem={
                    <Button onClick={() => setVisible(true)}>
                        <Icon name="add"></Icon>
                    </Button>
                }
            ></NavigationBar>
            <Pane>
                <SearchBar
                    value={value}
                    onChange={setValue}
                ></SearchBar>
                <Table
                    header="HEADER"
                    footer="FOOTER"
                    inset={true}
                >
                    <TableRow
                        title="Name"
                        style="right"
                        subtitle={<TextField
                            value={value}
                            onChange={setValue}
                            align="right"
                        ></TextField>}
                    ></TableRow>
                    <TableRow
                        title={String(checked)}
                        style="right"
                        subtitle={<Switch
                            value={checked}
                            onChange={setChecked}
                        ></Switch>}
                    ></TableRow>
                    <TableRow
                        title={<Button
                            title="Submit"
                            style={{ flex: 1 }}
                        ></Button>}
                    ></TableRow>
                </Table>
                <Table
                    header="HEADER"
                    footer="FOOTER"
                >
                    <TableRow
                        image={image}
                        title="Books"
                        subtitle="Banners, Sounds"
                        to="123"
                    ></TableRow>
                    <TableRow
                        image={image}
                        title="Books"
                        to="123"
                    ></TableRow>
                    <TableRow
                        title="Books"
                        subtitle="Banners, Sounds"
                        to="123"
                    ></TableRow>
                    <TableRow
                        title="Books"
                        to="123"
                    ></TableRow>
                    <TableRow
                        image={image}
                        title="Books"
                        subtitle="Banners, Sounds"
                        to="123"
                        style="right"
                    ></TableRow>
                    <TableRow
                        image={image}
                        title="Books"
                        to="123"
                        style="right"
                    ></TableRow>
                    <TableRow
                        title="Books"
                        subtitle="Banners, Sounds"
                        to="123"
                        style="right"
                    ></TableRow>
                    <TableRow
                        title="Books"
                        to="123"
                        style="right"
                    ></TableRow>
                </Table>
            </Pane>
            <TabBar tabs={tabs}></TabBar>
            {/* <WebView src="https://www.baidu.com/"></WebView> */}
            {/* <ActionSheet
                visible={visible}
                setVisible={setVisible}
                buttons={buttons}
            ></ActionSheet> */}
            <Alert
                visible={visible}
                setVisible={setVisible}
                buttons={buttons}
                title="Current Location Not Available"
                message="Your current location can no be determined at this time."
            ></Alert>
        </View>
    )
}

export default Index

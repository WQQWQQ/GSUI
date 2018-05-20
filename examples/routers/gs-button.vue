<template>
    <div>
        <GsButton>Default</GsButton>
        <GsButton type="primary">Primary</GsButton>
        <GsButton type="ghost">Ghost</GsButton>
        <GsButton type="dashed">Dashed</GsButton>
        <GsButton type="text">Text</GsButton>
        <br><br>
        <GsButton type="info">Info</GsButton>
        <GsButton type="success">Success</GsButton>
        <GsButton type="warning">Warning</GsButton>
        <GsButton type="error">Error</GsButton>
        <br><br>
        <GsButton type="primary" shape="circle" icon="ios-search"></GsButton>
        <GsButton type="primary" icon="ios-search">Search</GsButton>
        <GsButton type="primary" shape="circle" icon="ios-search">Search</GsButton>
        <GsButton type="primary" shape="circle">Circle</GsButton>
        <br><br>
        <GsButton type="ghost" shape="circle" icon="ios-search"></GsButton>
        <GsButton type="ghost" icon="ios-search">Search</GsButton>
        <GsButton type="ghost" shape="circle" icon="ios-search">Search</GsButton>
        <GsButton type="ghost" shape="circle">Circle</GsButton>
        <br><br>
        <GsButton>Default</GsButton>
        <GsButton disabled>Default(Disabled)</GsButton>
        <br>
        <GsButton type="primary">Primary</GsButton>
        <GsButton type="primary" disabled>Primary(Disabled)</GsButton>
        <br>
        <GsButton type="ghost">Ghost</GsButton>
        <GsButton type="ghost" disabled>Ghost(Disabled)</GsButton>
        <br>
        <GsButton type="dashed">Dashed</GsButton>
        <GsButton type="dashed" disabled>Dashed(Disabled)</GsButton>
        <br>
        <GsButton type="text">Text</GsButton>
        <GsButton type="text" disabled>Text(Disabled)</GsButton>
        <br><br>

        <br><br>
        <h4>基本</h4>
        <br><br>
        <Button-group>
            <GsButton>取消</GsButton>
            <GsButton type="primary">确定</GsButton>
        </Button-group>
        <Button-group>
            <GsButton disabled>昨日</GsButton>
            <GsButton disabled>今日</GsButton>
            <GsButton disabled>明日</GsButton>
        </Button-group>
        <Button-group>
            <GsButton type="primary">L</GsButton>
            <GsButton>M</GsButton>
            <GsButton type="ghost">M</GsButton>
            <GsButton type="dashed">R</GsButton>
        </Button-group>
        <br><br>
        <h4>配合图标</h4>
        <br><br>
        <Button-group>
            <GsButton type="primary">
                <Icon type="chevron-left"></Icon>
                前进
            </GsButton>
            <GsButton type="primary">
                后退
                <Icon type="chevron-right"></Icon>
            </GsButton>
        </Button-group>
        <Button-group>
            <GsButton type="primary" icon="ios-skipbackward"></GsButton>
            <GsButton type="primary" icon="ios-skipforward"></GsButton>
        </Button-group>
        <Button-group>
            <GsButton type="ghost" icon="ios-color-wand-outline"></GsButton>
            <GsButton type="ghost" icon="ios-sunny-outline"></GsButton>
            <GsButton type="ghost" icon="ios-crop"></GsButton>
            <GsButton type="ghost" icon="ios-color-filter-outline"></GsButton>
        </Button-group>
        <br><br>
        <h4>圆角</h4>
        <br><br>
        <Button-group shape="circle">
            <GsButton type="primary">
                <Icon type="chevron-left"></Icon>
                前进
            </GsButton>
            <GsButton type="primary">
                后退
                <Icon type="chevron-right"></Icon>
            </GsButton>
        </Button-group>
        <Button-group shape="circle">
            <GsButton type="primary" icon="ios-skipbackward"></GsButton>
            <GsButton type="primary" icon="ios-skipforward"></GsButton>
        </Button-group>
        <Button-group shape="circle">
            <GsButton type="ghost" icon="ios-color-wand-outline"></GsButton>
            <GsButton type="ghost" icon="ios-sunny-outline"></GsButton>
            <GsButton type="ghost" icon="ios-crop"></GsButton>
            <GsButton type="ghost" icon="ios-color-filter-outline"></GsButton>
        </Button-group>
        <br><br>
        <h4>尺寸</h4>
        <br><br>
        <GsButton type="primary" long>Long</GsButton>
        <br><br>
        <GsButton type="primary" size="large">Large</GsButton>
        <GsButton type="primary" size="small">small</GsButton>
        <br><br>
        <Button-group size="large">
            <GsButton type="ghost">Large</GsButton>
            <GsButton type="ghost">Large</GsButton>
        </Button-group>
        <Button-group>
            <GsButton type="ghost">Default</GsButton>
            <GsButton type="ghost">Default</GsButton>
        </Button-group>
        <Button-group size="small">
            <GsButton type="ghost">Small</GsButton>
            <GsButton type="ghost">Small</GsButton>
        </Button-group>
        <br><br>
        <Button-group size="large" shape="circle">
            <GsButton type="ghost">Large</GsButton>
            <GsButton type="ghost">Large</GsButton>
        </Button-group>
        <Button-group shape="circle">
            <GsButton type="ghost">Default</GsButton>
            <GsButton type="ghost">Default</GsButton>
        </Button-group>
        <Button-group size="small" shape="circle">
            <GsButton type="ghost">Small</GsButton>
            <GsButton type="ghost">Small</GsButton>
        </Button-group>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
import React from "react";
import "./AccountGame.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import accountsGame from "../../data/accountsGame.json";
import PageProductList from "../../components/pageProductList/pageProductList";

function AccountGame() {
    return (
        <div className="page-container">
            <PageProductList title={accountsGame.title} products={accountsGame.data} />
            <div className="page-content">
                <div className="page-description">
                    <ProductDescription content={<span>
                        <b>1. Outlook là gì ? Tại sao tài khoản lại là email outlook? Nó có an toàn không?</b><br />
                        - Outlook là một dịch vụ email của Microsoft nó giống với Gmail và các dịch vụ email khác.
                        - Chúng tôi cung cấp các tài khoản dưới dạng mail outlook vì sẵn có các tài khoản này email gốc đã là email outlook.
                        - Chắc chắn nó an toàn vì nó được Microsoft phát triển và có hàng triệu người dùng mỗi ngày.
                        <br /><br />
                        <b>2. Tài khoản là tài khoản đã có thông tin chưa? Email là email gốc hay không?</b><br />
                        - Tất cả các tài khoản chúng tôi cung cấp đều là tài khoản trắng thông tin hoàn toàn bao gồm cả email với tài khoản game.
                        - Sau khi bạn mua bạn có thể tự thêm các thông tin bao gồm: Tên, ngày tháng năm sinh, xác minh công dân(tài khoản LOL vs Valorant Việt Nam), email khôi phục, mật khẩu, vv
                        <br /><br />
                        <b>3. Thay đổi thông tin và truy cập email Outlook ở đâu?</b>   <br />

                        - Để thay đổi thông tin email bạn truy cập
                        <a href="https://go.microsoft.com/fwlink/p/?LinkID=2125442&clcid=0x409" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}> tại đây </a>
                        để đăng nhập
                        sau đó bạn sẽ thêm thông tin email khôi phục và số điện thoại của bạn.</span>} />
                </div>

            </div>
        </div>
    );
}

export default AccountGame;
